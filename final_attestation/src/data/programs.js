const programs = [
    {
        id: 'ID_01',
        title: "Frontend-разработка",
        description: "Фронтендеры работают с внешним видом сайтов, сервисов и приложений. Делают так, чтобы все правильно отображалось и корректно работало",
        photoLink: require('../img/front.jpg'),        
        type: 'programming',
        lessons: [
            {
                id: 'ID_01_01',
                title: "Frontend. Часть 1",
                posterLink: require('../media/posterFrontend.jpg'),
                mediaLink: require("../media/video1.mp4")
            },
            {
                id: 'ID_01_02',
                title: "Frontend. Часть 2",
                posterLink: require('../media/posterFrontend.jpg'),
                mediaLink: require("../media/video2.mp4")
            },
            {
                id: 'ID_01_03',
                title: "Frontend. Часть 3",
                posterLink: require('../media/posterFrontend.jpg'),
                mediaLink: require("../media/video3.mp4")
            }
        ]
    },
    {
        id: 'ID_02',
        title: "Python",
        description: "На Python пишут сайты, приложения, игры и чат-боты Например, Sims 4 и Dropbox написаны на Python",
        photoLink: require("../img/python.jpg"),       
        type: 'programming',
        lessons: [
            {
                id: 'ID_02_01',
                title: "Python. Часть 1",
                posterLink: require('../media/posterPython.jpg'),
                mediaLink: require("../media/video1.mp4")
            },
            {
                id: 'ID_02_02',
                title: "Python. Часть 2",
                posterLink: require('../media/posterPython.jpg'),
                mediaLink: require("../media/video2.mp4")
            },
            {
                id: 'ID_02_03',
                title: "Python. Часть 3",
                posterLink: require('../media/posterPython.jpg'),
                mediaLink: require("../media/video3.mp4")
            }
        ]
    },
    {
        id: 'ID_03',
        title: "UX/UI-дизайн",
        description: "UX/UI-дизайнер создает дизайн, который делает взаимодействие пользователя с интерфейсом максимально удобным и полезным",
        photoLink: require("../img/ux.jpg"),        
        type: 'design',
        lessons: [
            {
                id: 'ID_03_01',
                title: "UX/UI. Часть 1",
                posterLink: require('../media/posterUx.jpg'),
                mediaLink: require("../media/video1.mp4")
            },
            {
                id: 'ID_03_02',
                title: "UX/UI. Часть 2",
                posterLink: require('../media/posterUx.jpg'),
                mediaLink: require("../media/video2.mp4")
            },
            {
                id: 'ID_03_03',
                title: "UX/UI. Часть 3",
                posterLink: require('../media/posterUx.jpg'),
                mediaLink: require("../media/video3.mp4")
            }
        ]
    },
    {
        id: 'ID_04',
        title: "Java",
        description: "На Java пишут сайты, мобильные приложения и игры. Например, «Госуслуги», Minecraft и сервисы «Яндекса»",
        photoLink: require("../img/java.jpg"),        
        type: 'programming',
        lessons: [
            {
                id: 'ID_04_01',
                title: "Java. Часть 1",
                posterLink: require('../media/posterJava.jpg'),
                mediaLink: require("../media/video1.mp4")
            },
            {
                id: 'ID_04_02',
                title: "Java. Часть 2",
                posterLink: require('../media/posterJava.jpg'),
                mediaLink: require("../media/video2.mp4")
            },
            {
                id: 'ID_04_03',
                title: "Java. Часть 3",
                posterLink: require('../media/posterJava.jpg'),
                mediaLink: require("../media/video3.mp4")
            }
        ]
    },
    {
        id: 'ID_05',
        title: "Machine learning",
        description: "Научитесь создавать модели ML и обучать нейронные сети, анализировать большие объемы информации, создавать модели для прогнозирования в бизнесе, медицине, промышленности.",
        photoLink: require("../img/machine_learning.jpg"),       
        type: 'programming',
        lessons: [
            {
                id: 'ID_05_01',
                title: "Machine learning. Часть 1",
                posterLink: require('../media/posterMachine.jpg'),
                mediaLink: require("../media/video1.mp4")
            },
            {
                id: 'ID_05_02',
                title: "Machine learning. Часть 2",
                posterLink: require('../media/posterMachine.jpg'),
                mediaLink: require("../media/video2.mp4")
            },
            {
                id: 'ID_05_03',
                title: "Machine learning. Часть 3",
                posterLink: require('../media/posterMachine.jpg'),
                mediaLink: require("../media/video3.mp4")
            }
        ]
    },
    {
        id: 'ID_06',
        title: "Разработка игр на Unity",
        description: "Unity-разработчик создает игры в любых жанрах и для разных платформ: от 2D-стратегий до 3D-шутеров. На Unity созданы Hearthstone, Русы против Ящеров, Pokemon GO и другие популярные игры.",
        photoLink: require("../img/unity.jpg"),        
        type: 'programming',
        lessons: [
            {
                id: 'ID_06_01',
                title: "Unity. Часть 1",
                posterLink: require('../media/posterUnity.jpg'),
                mediaLink: require("../media/video1.mp4")
            },
            {
                id: 'ID_06_02',
                title: "Unity. Часть 2",
                posterLink: require('../media/posterUnity.jpg'),
                mediaLink: require("../media/video2.mp4")
            },
            {
                id: 'ID_06_03',
                title: "Unity. Часть 3",
                posterLink: require('../media/posterUnity.jpg'),
                mediaLink: require("../media/video3.mp4")
            }
        ]
    }

];

export default programs;
