/**
 * Marvelle Shop Configuration
 * change these links at any time to update the content
 */

export const CONFIG = {
  storeName: "Marvelle",
  whatsappNumber: "01611111989",
  whatsappMessage: "সালাম, আমি মারভেল শপ থেকে এই ব্যাগটি অর্ডার করতে চাই।",
  googleSheetLink: "https://forms.gle/5rtVzRHibWRVZVwp6", // User can replace this
  
  // Product Data
  product: {
    name: "Handle Clutch Bag",
    regularPrice: "১৪৯৯",
    discountedPrice: "৮৯৯",
    currency: "৳",
    details: [
      "Size: 20 x 7 x 14cm",
      "আধুনিক এবং স্টাইলিশ ডিজাইন।",
      "দীর্ঘস্থায়ী ও টেকসই চেইন এবং হুক।",
      "যেকোনো পার্টি বা ক্যাজুয়াল গেটআপের জন্য পারফেক্ট।",
      "Color: Black / Golden / Olive Green / White / Baby Pink"
    ],
    // Links that can be changed easily
    media: [
      {
        type: "image",
        url: "https://github.com/thewinnningmarvelle-del/image/blob/main/pa%20(1).png?raw=true",
        label: "Front View"
      },
      {
        type: "image",
        url: "https://github.com/thewinnningmarvelle-del/image/blob/main/pa%202.png?raw=true",
        label: "Side View"
      },
      {
        type: "image",
        url: "https://github.com/thewinnningmarvelle-del/image/blob/main/pa%204.png?raw=true",
        label: "Internal Space"
      },
      {
        type: "image",
        url: "https://github.com/thewinnningmarvelle-del/image/blob/main/pa%203.png?raw=true",
        label: "Internal Space"
      },
      {
        type: "video",
        url: "https://youtube.com/shorts/i6nsyt1_HMA?feature=share", // Replace with real video link
        label: "Product Video"
      }
    ]
  },
  
  // Logo (Simple SVG or Text based)
logo: {
  isImage: true, 
  src: "/web logo.png", // আপনার আপলোড করা ফাইলের নাম এখানে হুবহু বসানো হয়েছে
  text: "MARVELLE",
  subtext: "Luxe Collection"
}
};
