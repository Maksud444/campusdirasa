import PDFReader from '@/components/PDFReader';

type Props = {
  params: Promise<{
    filename: string;
  }>;
};

export default async function PDFViewPage({ params }: Props) {
  const { filename } = await params;
  
  // PDF URL তৈরি করা
  const pdfUrl = `/uploads/pdf/${filename}`;
  
  // Filename থেকে title তৈরি করা
  const title = decodeURIComponent(filename)
    .replace('.pdf', '')
    .replace(/-/g, ' ')
    .replace(/_/g, ' ');

  return (
    <PDFReader 
      pdfUrl={pdfUrl} 
      title={title}
    />
  );
}

