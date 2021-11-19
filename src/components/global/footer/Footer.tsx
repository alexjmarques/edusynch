function Footer(props) {
  return (
    <div className="bg-white w-screen mt-20">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-5 text-xs">
        <div className="xl:max-w-screen-xll md:max-w-screen-xl mx-auto px-4 sm:px-6 flex flex-wrap text-base">
          Copyright © 2020  <strong className="ml-1"> Eduick</strong>. <span className="sm:hidden md:block">Todos os direitos reservados.</span>
        </div>
      </div>
    </div>
  )
}
export { Footer }