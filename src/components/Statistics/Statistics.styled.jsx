import styled from 'styled-components'; 

export const StatisticCard = styled.section`
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
`
export const StatTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-top: 0;
    display: ${(title) => {
        console.log(title);
        if (title) {
            return 'block';
        } else {
            return 'none';
        }
    }}
`
export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-top: 20px;
`
export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover,
    &focus { 
      transform: translateY(-5px);  
      cursor: pointer; 
    }
`
export const StatLabel = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #333;
`  
export const StatPercentage = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin: 5px 0 0 0;
    color: #666;
`
    
