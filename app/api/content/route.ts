const posts = [
    {
      title: "Introduction to JavaScript",
      slug: "introduction-to-javascript",
      content: "JavaScript is a popular programming language used for building interactive websites and web applications.",
    },
    {
      title: "Getting Started with Python",
      slug: "getting-started-with-python",
      content: "Python is a versatile and beginner-friendly programming language with a wide range of applications.",
    },
    {
      title: "The Benefits of Regular Exercise",
      slug: "benefits-of-regular-exercise",
      content: "Regular exercise has numerous health benefits, including improved physical and mental well-being.",
    },
    {
      title: "Exploring the Wonders of Space",
      slug: "exploring-the-wonders-of-space",
      content: "Space exploration has led to many groundbreaking discoveries and expanded our understanding of the universe.",
    },
    {
      title: "Delicious and Nutritious Smoothie Recipes",
      slug: "delicious-and-nutritious-smoothie-recipes",
      content: "Here are some mouthwatering smoothie recipes that are both tasty and good for you.",
    },
    {
      title: "Tips for Effective Time Management",
      slug: "tips-for-effective-time-management",
      content: "Learn how to manage your time efficiently and increase productivity in both work and personal life.",
    },
    {
      title: "The Fascinating World of Artificial Intelligence",
      slug: "fascinating-world-of-artificial-intelligence",
      content: "Artificial Intelligence (AI) is a rapidly advancing field with the potential to revolutionize various industries.",
    },
    {
      title: "Mastering the Art of Photography",
      slug: "mastering-the-art-of-photography",
      content: "Capture stunning images by understanding composition, lighting, and various photography techniques.",
    },
    {
      title: "Tips for Stress Relief and Relaxation",
      slug: "tips-for-stress-relief-and-relaxation",
      content: "Discover effective strategies for reducing stress and achieving a state of relaxation.",
    },
    {
      title: "How to Start Your Own Small Business",
      slug: "how-to-start-your-own-small-business",
      content: "Step-by-step guide to launching and running a successful small business.",
    },
  ];
  import {NextResponse} from 'next/server'
  import { getServerSession } from 'next-auth';
  
  export async function GET (){
    const session=await getServerSession()
    return NextResponse.json(posts)
    
  }

  
//   import {NextResponse} from 'next/server'

//   export async function