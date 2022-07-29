import './DrawerMenu.css';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

function DrawerMenu() {
    const navigate = useNavigate();
    
    const navigateToCategory = (category) => {
        switch (category) {
            case 0:
                navigate('/category/MCO1051');
                break;
            case 1:
                navigate('/category/MCO1039');
                break;
            case 2:
                navigate('/category/MCO1743');
                break;
        }
    }
    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Celulares y Smartphones', 'Cámaras y Accesorios', 'Carros, Motos y Otros'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => {navigateToCategory(index)}}>
                            <ListItemIcon>
                                {index === 0 && <PhoneIphoneIcon />}
                                {index === 1 && <PhotoCameraIcon />}
                                {index === 2 && <DirectionsCarIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default DrawerMenu;