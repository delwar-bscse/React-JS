const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();

function Card(props) {
  const {todoTitle,todoDes} = props;
  return  <div className='card'>
            <h3 className='cardTitle'>{todoTitle}</h3>
            <p className='todoDes'>{todoDes}</p>
            <p className='todoFooter'>{getDay+"/"+getMonth+"/"+getYear}</p>
          </div>
}

export default Card;