import {StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //in HomeScreen
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '5%'
    },
    homeHeaderText: {
        color: 'white',
        fontSize: 67,
        fontFamily: 'Times New Roman',
        letterSpacing: 3,
        textAlign: 'center',
    },
    chefText: {
        color: 'white',
        fontSize: 37,
        fontFamily: 'Avenir',
        letterSpacing: 7,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    homeSubText: {
        color: '#d4081d',
        fontSize: 30,
        fontFamily: 'Times New Roman',
        textAlign: 'center',
        letterSpacing: 1,
        width: 300,
        paddingBottom: 30,
    },
    homeLogo: {
        width: 150,
        height: 150, 
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 150,
        paddingBottom: '5%',
    },
    homeButton: { //used in both Home Screen and Assessment
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
        height: 40,
        marginBottom: 10,
        borderRadius: 40,
        backgroundColor: 'rgba(255 255 255/ 0.5)',
    },
    homeButtonText: { //used in both Home Screen, Assessment, and Level Template
        textTransform: 'uppercase',
        color: '#f04713',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        letterSpacing: 3,
        fontSize: 20,
        textDecorationLine: 'none', 
        marginLeft: 10,
    },
    
    //in Assessment Screen
    assessmentContainer: {
        flex: 2,
        paddingTop: 22,
        paddingBottom: 22
    },
    appTitle: {
        fontFamily: 'Avenir',
        textAlign: 'center',
        paddingBottom: 22,
        fontSize: 22,
    },
    sectionHeader: {
        backgroundColor: '',
        paddingStart: 12,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'left',
        fontFamily: 'Avenir',
        fontSize: 20,
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    item: {
        marginLeft: 8,
        fontWeight: 500,
        fontSize: 18,
        padding: 16,
        color: 'black',
    },
    checkboxBase: {
        width: 24,
        height: 24,
        alignContent: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ff0000',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#ff0000',
    },
    
    //in Level Map
    levelNodes : {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'salmon',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 2,   
    },
    levelNodes2 : {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderColor: 'black',
        borderWidth: 2,   
    },
    levelNodeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    background: {
        flex: 1,
        resizeMode: 'cover', //mantain aspect ratio of image
        justifyContent: 'center',
        alignItems: 'center', 
    },
    LevelMapContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    //in Difficulty Selection
    difficultyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '7%'
    },
    difficultyHeaderText: {
        textTransform: 'uppercase',
        color: 'white',
        fontFamily: 'Avenir-Roman',
        fontSize: 45,
        textAlign: 'center',
    },
    difficultyButtonText: {
        textTransform: 'uppercase',
        color: '#995c1f',
        fontFamily: 'Arial Rounded MT Bold',
        fontSize: 40,
        textDecorationLine: 'none', 
        marginLeft: 10,
    },
    
    //in LevelTemplate
    quizButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 140,
        height: 40,
        marginBottom: 30,
        borderRadius: 40,
        backgroundColor: 'rgba(255 255 255/ 0.5)',
    },

    //in MiniQuiz
    miniContainer: {
        flex: 2,
        paddingTop: 10,
        paddingBottom: 70,
    },
    miniAppTitle: {
        fontFamily: 'Avenir',
        color: 'white',
        textAlign: 'center',
        paddingBottom: 22,
        fontSize: 22,
    },
    miniSectionHeader: {
        paddingStart: 12,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'left',
        fontFamily: 'Avenir',
        color: '#f04713',
        fontSize: 20,
        backgroundColor: 'rgba(247,247,247,0.5)',
    },
    choiceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'rgba(247,247,247,0.1)',
    },
    choiceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'rgba(247,247,247,0.1)',
    },
    correctChoiceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'green',
        backgroundColor: 'rgba(247,247,247,0.1)',
    },
    wrongChoiceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'red',
        backgroundColor: 'rgba(247,247,247,0.1)',
    },
    answerContainer: {
        margin: 60,
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        fontFamily: 'Avenir',
        color: '#f04713',
        fontSize: 25,
        borderRadius: 40,
        backgroundColor: 'rgba(247,247,247,0.5)',
    },
    miniItem: {
        marginLeft: 8,
        color: 'white',
        fontWeight: 500,
        fontSize: 18,
        padding: 16,
    },
    miniButton: {
        margin: 70,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        marginVertical: 45,
        marginBottom: 10,
        borderRadius: 40,
        backgroundColor: 'rgba(255 255 255/ 0.5)',
    },
    miniButtonText: {
        textTransform: 'uppercase',
        color: '#f04713',
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        letterSpacing: 3,
        fontSize: 25,
        
    },
    


    container: {
        flex: 1, //if 1, take up all available space on screen
        backgroundColor: 'transparent',
        alignItems: 'center', //content is centered horizontally
        justifyContent: 'flex-start',
        paddingTop: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    backgroundTest: {
        flex: 1,
        backgroundColor: 'blue',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTextLevel: {
        color: 'black',
        fontSize: 32,
        textAlign: 'left',
    },
    logo: {
        width: 300,
        height: 300, 
        marginTop: 50,
        borderRadius: 150,
    },
    levelIntroImage: {
        width: 430,
        height: 200,
        marginTop: 50
    },
    assesmentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'black',
        textDecorationLine: 'none', //underline for button text
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        marginLeft: -5,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    aCircle: {
        backgroundColor: 'blue',
        width: 300,
        height: 300, 
        marginTop: 50,
        borderRadius: 150,
    },
    pointsContainer: {
        position: 'absolute',
        top: 100,
        right: 10,
    },
    pointsText: {
        fontSize: 24,
    },
});

export default styles; 
