const{createApp}=Vue;
const app=createApp({
    data(){
        return{
            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:16',
                    message: 'Tutto fatto!',
                    status: 'received'
                    }
                    ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                    ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15',
                    message: 'Ah scusa!',
                    status: 'received'
                    }
                    ],
                },
                {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                    ],
                },
                {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                    }
                    ],
                },
                {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
                    ],
                },
                {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
                    ],
                },
                {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51',
                    message: 'OK!!',
                    status: 'received'
                    }
                    ],
                }
            ],
            activeChat: 0,
            selectedElement: null,
            newMessage: '',
        };
    },
    methods:{
        changeChat(index){
            this.activeChat = index;
            this.selectedElement = index;
        },

        getLastMessageDate() {
            const activeChat = this.contacts[this.activeChat];
            const lastMessage = activeChat.messages[activeChat.messages.length - 1];   
            if (lastMessage) {
                return lastMessage.date;
            }
        },
        
        sendMessage(){
            if(this.newMessage.trim() !== ''){
                const activeChat = this.contacts[this.activeChat]
                const currentDateTime = new Date();
                const currentDate = currentDateTime.toLocaleDateString('it-IT');
                const currentTime = currentDateTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric'});

                activeChat.messages.push({
                    date: `${currentDate}  ${currentTime}`,
                    message: this.newMessage,
                    status: 'sent',
                })

                this.newMessage = '';
            }
        }
    },  

}).mount('#app');