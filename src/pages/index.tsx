import { Layout } from '@components/global'
import { Landing } from '@components/landing/Landing'

export default function Home() {
  return (
    <Layout className="home" title="Eduick - Find your best teacher" header={true}>
      <div className={`flex justify-center items-center home__bg`}>
        <Landing />
      </div>
    </Layout>
  )
}