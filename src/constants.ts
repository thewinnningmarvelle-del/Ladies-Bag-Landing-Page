/**
 * Marvelle Shop Configuration
 * change these links at any time to update the content
 */

export const CONFIG = {
  storeName: "Marvelle Shop",
  whatsappNumber: "01611111989",
  whatsappMessage: "সালাম, আমি মারভেল শপ থেকে এই ব্যাগটি অর্ডার করতে চাই।",
  googleSheetLink: "https://docs.google.com/forms/d/e/1FAIpQLScjN01FcAKRHMrPxRf64SqzNfNK9YYF9oEnjeyPsRMUR3wzYw/viewform?usp=sharing&ouid=102274776296577462164", // User can replace this
  
  // Product Data
  product: {
    name: "Handle Clutch Bag",
    regularPrice: "1499",
    discountedPrice: "899",
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
        url: "https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-6/631457138_122109603123226063_2916483897712434975_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=FRvnIoq-GWoQ7kNvwGg8VE4&_nc_oc=AdrTkjzgF8j83RUZrJva6SCCJg3pKhHE2QsuFepNGTBOfZiUTIzPiIlNiERZxOxZgqo&_nc_zt=23&_nc_ht=scontent.fdac165-1.fna&_nc_gid=qBiqlLYAa_BKstPmClRwzw&_nc_ss=7b2a8&oh=00_Af4MoEqfFnnQfwk1OQ0V1-jxEUtz6agszPfh8iOdxghMKA&oe=6A07446D",
        label: "Front View"
      },
      {
        type: "image",
        url: "https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-6/632643551_122109602841226063_7809947058489590604_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=D0XB3cGEhtEQ7kNvwFqd92Y&_nc_oc=Adpz8ZqKB3nC8zEJhahF4kqAGn7keIXrgC7G7n45sFDr4ckSPS3HcfcjAaK08uYP55g&_nc_zt=23&_nc_ht=scontent.fdac165-1.fna&_nc_gid=lBZGEhZ1pbct0M7EZtzryg&_nc_ss=7b2a8&oh=00_Af5gzeROK9-EaNBCvpOOoPrMn3h-d_VdQmWEL3dvZ1xl0g&oe=6A075D83",
        label: "Side View"
      },
      {
        type: "image",
        url: "https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/634344929_122109602883226063_3559370317074456934_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=EahTFq6yBdgQ7kNvwGP46ux&_nc_oc=AdrA8XGHVzMc1PH5PMFEIGkCUPy2puu6xKhO0SIwJPf8tCc5wyvi_LsU65UnN1Vt_Rw&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=8759BXsJ99YzXqp9DYu0Fw&_nc_ss=7b2a8&oh=00_Af4a014aidCx6rM8zkeSfp2QIh_KgS0veKiQtQauSI4L5Q&oe=6A0756A5",
        label: "Internal Space"
      },
      {
        type: "video",
        url: "https://www.youtube.com/shorts/i6nsyt1_HMA", // Replace with real video link
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
