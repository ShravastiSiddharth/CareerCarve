// components/Sidebar.tsx
import React from 'react';
import { useAuth } from '../../authentication/AuthContext';
import styles from '../../styles/Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHouse, faChessBoard, faGear, faUserPlus, faChartSimple, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate,useLocation } from 'react-router-dom';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path, { state: { from: location.pathname } });
    };


    return (
        <div className={styles.sidebar}>
            <div className={styles.userInfoCont}>
            <div className={styles.userInfo}>
            <FontAwesomeIcon icon={faUser} style={{fontSize:'2rem',}}/>
                <h2>{user?.name}</h2>
             
               
               
            </div>
            </div>
            <nav className={styles.sidenav}>
                <ul>
                    <li> <FontAwesomeIcon icon={faHouse} style={{color: "#7d7d7d",}} />
                        <Link to="/mentor" >
                       
                           <p> Home</p>
                        </Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faChessBoard} style={{ color: "#7d7d7d" }} />
                        <Link to="/addslot"><p>Add Slots</p></Link>
                        
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faGear} style={{color: "#7d7d7d",}}/>
                        <Link to="#"  >
                            <p>Settings</p>
                        </Link>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: "#7d7d7d",}}/>
                        <Link to="#"  >
                            <p>Teams</p>
                        </Link>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faChartSimple} style={{color: "#7d7d7d",}}/>
                        <Link to="#"  >
                            <p>Analytics</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            
           
            
            <button onClick={logout} className={styles.logoutbtn}><FontAwesomeIcon icon={faRightFromBracket} />Logout</button>
            
        </div>
    );
};

export default Sidebar;
