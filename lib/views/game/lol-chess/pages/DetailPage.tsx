export const DetailPage = ({params}: {params: {name: string}}) => {
  const {name} = params;
  console.log("name: ", name)
  return (
    <div>
      detail page {name}
    </div>
  )
}

