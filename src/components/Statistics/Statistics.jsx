import PropTypes from 'prop-types'; 
import { StatisticCard, StatTitle, StatList, StatItem, StatLabel, StatPercentage } from './Statistics.styled';

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


export const Statistics = ({title, stats}) => {
    return <StatisticCard>
  <StatTitle>{title}</StatTitle> 

  <StatList>
    {stats.map(({id, label, percentage }) => {
        return (
    <StatItem key={id} style={{backgroundColor: randomColor()}}>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}</StatPercentage>
    </StatItem>
        )
    })}
    </StatList>
    
    </StatisticCard>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }))
};