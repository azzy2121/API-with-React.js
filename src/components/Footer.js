import styled from 'styled-components';

const Foot = styled.footer `
position: fixed;
left: 0;
bottom: 0;
width: 100%;
background-color: #DC3545;
color: #fff;
text-align: center;
padding: 5px;
`;

const Footer = () => {    
    return (
        <Foot>
        <footer>
              <small>&copy;POKEMON Inc.</small>
        </footer>
        </Foot>
    ); 
}

export default Footer;