import TopCallRow from '@/components/TopCallRow'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <TopCallRow/>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
