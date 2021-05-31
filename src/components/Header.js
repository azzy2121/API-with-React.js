import styled from 'styled-components';
import Logo from '../assets/logo.png';

const Head = styled.header `
background-color: #DC3545;
`;

const Header = () => {
    return (
        <Head>
        <header>
            <nav className="navbar">
                <div className="container-fluid"><img src={Logo} alt="logo" width="150" height="50" />
                </div>
            </nav>
        </header>
        </Head>
    );
}

export default Header