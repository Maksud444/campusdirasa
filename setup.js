const fs = require('fs');
const path = require('path');

// Define the folder structure
const structure = {
  'src/app/(auth)/login': ['page.tsx'],
  'src/app/(auth)/register': ['page.tsx'],
  'src/app/(dashboard)/pdf/iqama': ['page.tsx'],
  'src/app/(dashboard)/pdf/rooms': ['page.tsx'],
  'src/app/(dashboard)/pdf/exams': ['page.tsx'],
  'src/app/(dashboard)/pdf/removed': ['page.tsx'],
  'src/app/(dashboard)/hospitals': ['page.tsx'],
  'src/app/(dashboard)/hospitals/[id]': ['page.tsx'],
  'src/app/(dashboard)/embassies': ['page.tsx'],
  'src/app/(dashboard)/forms': ['page.tsx'],
  'src/app/(dashboard)/forms/iqama': ['page.tsx'],
  'src/app/(dashboard)/forms/tadarus': ['page.tsx'],
  'src/app/(dashboard)/forms/renewal': ['page.tsx'],
  'src/app/(dashboard)/library': ['page.tsx'],
  'src/app/(dashboard)/library/dirasa-khassa': ['page.tsx'],
  'src/app/(dashboard)/library/iedadi': ['page.tsx'],
  'src/app/(dashboard)/library/thanawi': ['page.tsx'],
  'src/app/(dashboard)/scholarships': ['page.tsx'],
  'src/app/(dashboard)/videos': ['page.tsx'],
  'src/app/(dashboard)/verification': ['page.tsx'],
  'src/app/(dashboard)/archive': ['page.tsx'],
  'src/app/(dashboard)/feedback': ['page.tsx'],
  'src/app/admin': ['page.tsx', 'layout.tsx'],
  'src/app/admin/users': ['page.tsx'],
  'src/app/admin/uploads': ['page.tsx'],
  'src/app/admin/settings': ['page.tsx'],
  'src/app/teacher': ['page.tsx', 'layout.tsx'],
  'src/app/teacher/uploads': ['page.tsx'],
  'src/app/api/auth/[...nextauth]': ['route.ts'],
  'src/app/api/upload': ['route.ts'],
  'src/app/api/pdf': ['route.ts'],
  'src/app/api/hospitals': ['route.ts'],
  'src/app/api/embassies': ['route.ts'],
  'src/app/api/forms': ['route.ts'],
  'src/app/api/books': ['route.ts'],
  'src/app/api/scholarships': ['route.ts'],
  'src/app/api/videos': ['route.ts'],
  'src/app/api/verification': ['route.ts'],
  'src/app/api/feedback': ['route.ts'],
  'src/components/layout': ['Navigation.tsx', 'Sidebar.tsx', 'Footer.tsx', 'MobileMenu.tsx'],
  'src/components/ui': ['Button.tsx', 'Card.tsx', 'Input.tsx', 'Modal.tsx'],
  'src/components/features': ['PDFViewer.tsx', 'PDFUpload.tsx', 'ImageUpload.tsx', 'VideoPlayer.tsx'],
  'src/components/shared': ['RoleGuard.tsx', 'LoadingSpinner.tsx'],
  'src/lib': ['prisma.ts', 'auth.ts', 'cloudinary.ts', 'utils.ts'],
  'src/types': ['index.ts', 'user.ts', 'pdf.ts'],
  'prisma': ['schema.prisma'],
  'public/images': ['.gitkeep'],
  'public/uploads': ['.gitkeep'],
};

// Create folders and files
Object.entries(structure).forEach(([folder, files]) => {
  const folderPath = path.join(process.cwd(), folder);
  
  // Create folder
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`✅ Created: ${folder}`);
  }
  
  // Create files
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '// TODO: Implement\n');
      console.log(`  📄 Created: ${folder}/${file}`);
    }
  });
});

console.log('\n✨ Project structure created successfully!');