
import { LayoutProps } from 'src/interfaces';
import { Footer, Header, HeaderAdmin } from '..'

function Layout(props: LayoutProps) {
  const header = props.header == true ? <Header /> : <HeaderAdmin />;
  return (
    <div className={props.className}>
      {header}
      <main>{props.children}</main>
    </div>
  )
}
export { Layout }