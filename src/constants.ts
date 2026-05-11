/**
 * Marvelle Shop Configuration
 * change these links at any time to update the content
 */

export const CONFIG = {
  storeName: "Marvelle Shop",
  whatsappNumber: "01611111989",
  whatsappMessage: "সালাম, আমি মারভেল শপ থেকে এই ব্যাগটি অর্ডার করতে চাই।",
  googleSheetLink: "https://docs.google.com/spreadsheets/d/your-id-here", // User can replace this
  
  // Product Data
  product: {
    name: "লেডিস লাক্সারি হ্যান্ডব্যাগ",
    regularPrice: "৪,৫০০",
    discountedPrice: "২,৯৯০",
    currency: "৳",
    details: [
      "প্রিমিয়াম কোয়ালিটি লেদার মেটেরিয়াল।",
      "আধুনিক এবং স্টাইলিশ ডিজাইন।",
      "দীর্ঘস্থায়ী ও টেকসই চেইন এবং হুক।",
      "যেকোনো পার্টি বা ক্যাজুয়াল গেটআপের জন্য পারফেক্ট।",
      "কালার: ক্লাসিক ব্ল্যাক / এলিগ্যান্ট গোল্ড।"
    ],
    // Links that can be changed easily
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000",
        label: "Front View"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=1000",
        label: "Side View"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000",
        label: "Internal Space"
      },
      {
        type: "video",
        url: "https://v1.bg.u-it.me/v1/video/placeholder.mp4", // Replace with real video link
        label: "Product Video"
      }
    ]
  },
  
  // Logo (Simple SVG or Text based)
  logo: {
    text: "MARVELLE",
    subtext: "Luxe Collection"
  }
};
