import Header from '../components/hearder/Header';
import Footer from '../components/footer/footer';
import Playgame from '../components/playgame/Playgame';

export default function Livegame() {
  const opt = 'try'
  return (
    <div>
      <Header />
      <Playgame backgroundImg={ "https://garzaprotocol.com/wp-content/uploads/questions-answers.jpg"} option1={opt} title={'Playgame'}/>
      <Footer />
    </div>
  )
}
