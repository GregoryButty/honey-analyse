import BrendLink from "../components/BrendLink"
import Title from "../components/Title"
import Prevy from "../components/Prevy"
import Text from "../components/Text"

export default function Home() {
  return (
    <main className="container">

      <div className="blur">

        <Title titleText="Вітаю бджілка" titleImage="/icons/bee.png" isPriority="false"/>
        <Prevy prevyText="Тут ми займаємося такими речами:" />
        <Text text={
            <ul>
              <li>Збираємо інформацію.</li>
              <li>Аналізуємо інформацію.</li>
              <li>Робимо висновки.</li>
              <li>Насолоджуємося життям.</li>
            </ul>
        } />
        <BrendLink path="/checkUser" linkText="Увійти"/>

      </div>

      <div className="block"/>

    </main>
  )
}
