import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Fetch the PDF from the blob URL (original source)
    const resumeUrl = 'https://blobs.vusercontent.net/blob/resume_arpitha-NnEpzsF68SeMDoHEtMlQ6FWVe5H8xC.pdf'
    
    const response = await fetch(resumeUrl)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch resume: ${response.statusText}`)
    }

    const buffer = await response.arrayBuffer()

    // Return the file with proper headers for PDF download
    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Arpitha_Jain_Resume.pdf"',
        'Content-Length': buffer.byteLength.toString(),
        'Cache-Control': 'public, max-age=31536000',
        'Pragma': 'public',
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
