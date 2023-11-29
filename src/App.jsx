import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {

  const data = [
    {
      title: 'Preperation for new project',
      text: 'Someting text from my card',
      date: new Date()
    },

    {
      title: 'Preperation for new deal',
      text: 'Someting else',
      date: new Date()
    }
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header/>
        <JournalAddButtom/>
        <JournalList>
          <CardButtom>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButtom>

          <CardButtom>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButtom>
        </JournalList>
      </LeftPanel>

      <Body>
        Body
      </Body>
    </div>
  );
}

export default App;
