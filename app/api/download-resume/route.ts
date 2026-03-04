import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Arpitha_Jain_Resume.pdf')
    
    // Read the file asynchronously
    const fileBuffer = await fs.readFile(filePath)

    // Return the file with proper headers for PDF download
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Arpitha_Jain_Resume.pdf"',
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
  } catch (error) {
    console.error('[v0] Resume download error:', error)
    return NextResponse.json(
      { error: 'Failed to download resume' },
      { status: 500 }
    )
  }
}
