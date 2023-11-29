import './JournalItem.css';

function JournalItem( { title, text, date } ) {
  const formatedDate = new Intl.DateTimeFormat('usa-USA').format(date);
  
  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__body">{formatedDate}</div>
        <div className="journal-item__body">{text}</div>
      </h2>
    </>
  );
}

export default JournalItem;
