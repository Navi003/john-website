import "./globals.css";

export const metadata = {
  title: "English Courses for Adults",
  description: "Practical and flexible English learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-lightest text-gray-dark text-primary ">
        <h1 className="text-primary-default">English courses</h1>

        <div className="hidden bg-primary bg-accent"></div>

        {children}
      </body>
    </html>
  );
}
