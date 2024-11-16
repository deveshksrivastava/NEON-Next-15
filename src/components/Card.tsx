type Props = {
    movie: any;
}

export default function Card(props:Props) {
const {movie} = props
// console.log('movie',movie)
  return (
    <div className="bg-gray-500 p-4"> 
        <div>{movie?.title}</div> 
        <div>{movie?.imdbId}</div>
        <div>{movie?.Runtime}</div>
        <img src={movie?.posterURL} alt={movie.title} width={100} height={100} />
        {/* <Image src={'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg'} alt={user.Title} width={100} height={100} /> */}
        <br/>
    </div>
  )
}
