import { Button, buttonVariants } from "@/components/ui/button";
export default function App() {
  return (
    <div className='min-h-screen bg-accent-foreground flex flex-col items-center justify-center p-4 gap-6'>
      <h1 className='text-3xl font-bold text-gray-800'>UI Library Demo</h1>
      <Button variant='destructive'>Default Button</Button>
      <div className={buttonVariants({ variant: "secondary" })}>
        Just a styled div
      </div>
    </div>
  )
}
