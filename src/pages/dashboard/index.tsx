import { Footer, Layout } from '@components/global'
import { DashboardComponents } from '@components/dashboard/Dashboard'

export default function Dashboard() {
  return (
    <Layout className="dashboard" title="Eduick - Find your best teacher" header={false}>
      <div className="flex flex-col justify-center items-center home__bg">
        <DashboardComponents />
        <Footer />
      </div>
    </Layout>

  )
}
