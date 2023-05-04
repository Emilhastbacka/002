import Article from "@/components/Article"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Article hero="index page!">
        <h1>Hello World!</h1>
        <p>Detta är index sidan!</p>
      </Article>
      <Footer />
    </div>
  )
}
