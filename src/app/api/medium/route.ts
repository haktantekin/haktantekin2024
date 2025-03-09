import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export const dynamic = 'force-static';

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
  'content:encoded'?: string;
  [key: string]: unknown;
}

export async function GET() {
  try {
    // Medium RSS feed'ini çek
    const response = await fetch('https://medium.com/feed/@haktantekin', {
      next: { revalidate: 3600 } // 1 saat cache
    });
    
    if (!response.ok) {
      throw new Error('Medium RSS feed çekilemedi');
    }
    
    const xmlData = await response.text();
    
    // XML'i parse et
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_'
    });
    
    const result = parser.parse(xmlData);
    const items = result.rss.channel.item;
    
    // Yazıları formatlayarak döndür
    const posts = items.map((item: MediumItem, index: number) => {
      // Tarih formatını düzenle
      const date = new Date(item.pubDate);
      const formattedDate = `${date.getDate()} ${date.toLocaleString('tr-TR', { month: 'long' })} ${date.getFullYear()}`;
      
      // Başlıktaki | işaretinden sonrasını kaldır
      const title = item.title.replace(/^(.*?)(\s*\|.*)?$/, '$1');
      
      // Thumbnail'i almak için içerik analizi
      let thumbnail = undefined;
      if (item['content:encoded']) {
        const imgRegex = /<img[^>]+src="([^">]+)"/;
        const imgMatch = item['content:encoded'].match(imgRegex);
        thumbnail = imgMatch ? imgMatch[1] : undefined;
      }
      
      return {
        id: index + 1,
        title,
        link: item.link,
        date: formattedDate,
        thumbnail,
        description: item.description || ''
      };
    });
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Medium yazıları çekilemedi:', error);
    return NextResponse.json(
      { error: 'Medium yazıları çekilemedi' },
      { status: 500 }
    );
  }
} 