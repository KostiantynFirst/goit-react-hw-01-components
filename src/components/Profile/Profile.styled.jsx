import styled from 'styled-components'; 

export const ProfileCard = styled.div`
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`
export const CardName = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
` 
export const CardTag = styled.p`
    font-size: 18px;
    margin: 5px 0;
    color: #666;
`
export const CardLocation = styled.p`
    font-size: 14px;
    margin: 0;
    color: #999;
`
export const CardStats = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 5px;
    margin-top: 20px;
`

export const CardElement = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #f7f7f7;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover,
    &:focus { 
       transform: translateY(-5px);
       cursor: pointer; 
    } 
`

export const CardLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #666;
`
export const CardQuantity = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`
