import React, { useState } from "react";

const DateStamp = (date) => {
  const pastDate = new Date(date.split(" ").join("T")).getTime();
  const currentDate = new Date().getTime();

  const diffDays = Math.ceil(
    Number(currentDate - pastDate) / (1000 * 60 * 60 * 24)
  );
  const diffHours = Math.ceil(
    Number(currentDate - pastDate) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.ceil(Number(currentDate - pastDate) / (1000 * 60));
  const diffSeconds = Math.ceil(Number(currentDate - pastDate) / 1000);

  if (diffDays > 0) {
    return { date: `${diffDays} days ago` };
  }
  if (diffHours > 0) {
    return { date: `${diffDays} hours ago` };
  }
  if (diffMinutes > 0) {
    return { date: `${diffMinutes} min ago` };
  }
  if (diffSeconds > 0) {
    return { date: `${diffSeconds} sec ago` };
  }

  return date;
};

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

const handlerComponent = (Component) => {
  return function (props) {
    return <Component {...DateStamp(props.date)} />;
  };
};

const DateTimePretty = handlerComponent(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item, index) => (
    <Video key={index} url={item.url} date={item.date} />
  ));
}

export default function Main() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-03-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
