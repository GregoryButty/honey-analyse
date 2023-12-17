import BrendLink from "./components/BrendLink"
import Title from "./components/Title"
import Text from "./components/Text"

export default function Home() {
  return (
    <main className="container">

      <div className="blur">

        <Title textTitle="Вітаю бджілка" titleImage="/icons/bee.png"/>
        <Text prevy="Тут ми займаємося такими речами:" text={
          <ul>
            <li>Збираємо інформацію.</li>
            <li>Аналізуємо інформацію.</li>
            <li>Робимо висновки.</li>
            <li>Насолоджуємося життям.</li>
          </ul>}
        />
        <BrendLink path="/log-in" textLink="Увійти"/>

      </div>

      <div className="block"/>

    </main>
  )
}
