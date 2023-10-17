import Header from '@/components/Header'
import TopCallRow from '@/components/TopCallRow'

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
    </>
  )
}
