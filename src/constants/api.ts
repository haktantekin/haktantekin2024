import { NextResponse } from 'next/server'
import data from '@/data/data.json'

export async function GET() {
  return NextResponse.json(data)
}

export const API_URLS = {
  CONTENT: '/api/content'
} as const

export type ApiUrls = typeof API_URLS 