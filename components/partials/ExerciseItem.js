import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';



export function ExerciseItem({ data, onPressHandler }) {
    const [item, setItem] = useState({
        name: '',
        image: null
    });

    useState(() => {
        switch (data.name) {
            case "Mięśnie brzucha":
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/miesnie_brzucha.jpg')
                });
                break;
            case "Klatka piersiowa":
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/klatka_piersiowa.jpg')
                });
                break;
            case "Nogi":
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/nogi.png')
                });
                break;
            case "Barki i plecy":
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/plecy.jpg')
                });
                break;
            case "Ramiona":
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/ramiona.png')
                });
                break;
            
            case 'Pajacyki':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/pajacyki.png')
                });
                break;
            case 'Brzuszki':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/brzuszki_tło.jpg')
                });
                break;
            case 'Mountain Climber':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/mountain_climber.png')
                });
                break;
            case 'Podnoszenie nóg':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/podnoszenie_nog.jpg')
                });
                break;
            case 'Pompki':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/pompki.jpg')
                });
                break;
            case 'Triceps':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/triceps.png')
                });
                break;
            case 'Pompki na podwyższeniu':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/pompki_na_podwyzszeniu.jpg')
                });
                break;
            case 'Przysiady':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/przysiady.jpg')
                });
                break;
            case 'Wypad w tył':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/wypad_w_tyl.jpg')
                });
                break;
            case 'Przyciąganie kolan':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/przyciaganie_kolan.jpg')
                });
                break;
            case 'Unoszenie ramion':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/unoszenie_ramion.jpg')
                });
                break;
            case 'Hip hinge':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/hip_hinge.jpg')
                });
                break;
            case 'Ćwiczenia ciosów':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/cwiczenie_ciosow.jpg')
                });
                break;
            case 'Wstawanie z podporu':
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/wstawanie_z_podporu.jpg')
                });
                break;

            default:
                setItem({
                    name: data.name,
                    image: require('./../../assets/images/klatka_piersiowa.jpg')
                });
                break;
        }
    }, []);
    
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPressHandler}
        >
            <Image source={item.image} style={styles.exerciseImage}/>
            <Text style={styles.exerciseName}>{item.name}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: '#535353',
        flexDirection: 'row',
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    exerciseImage: {
        width: 110,
        height: 110,
        backgroundColor: 'black',
        borderRadius: 10
    },
    exerciseName: {
        width: '60%',
        fontSize: 20,
        color: 'white',
        marginLeft: 15,
    }
});