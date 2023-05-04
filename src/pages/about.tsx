import Article from "@/components/Article"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function AboutPage() {
    return (
        <div>
            <Header />
            <Article hero="This is us!">
                <p>About page</p>
            </Article>
            <Footer />
        </div>
    )
}
