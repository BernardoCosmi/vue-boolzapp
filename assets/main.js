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
            searchChat:'',
        };
    },
    methods:{
        changeChat(index){
            this.activeChat = index;
            this.selectedElement = index;
    
            // prendo l'indice nella lista originale (non filtrata)
            const originalIndex = this.contacts.indexOf(this.filteredContacts[index]);
    
            this.activeChat = originalIndex
        },

        getLastMessageDate() {
            const activeChat = this.contacts[this.activeChat];
            const lastMessage = activeChat.messages[activeChat.messages.length - 1];   
            if (lastMessage) {
                return lastMessage.date;
            }
        },
        randomResponseGenerator() {
            const responses = [
                "Ciao!", 
                "Come stai?", 
                "Grazie per il messaggio!", 
                "Che bella giornata!", 
                "Buongiorno!",
                "Sono qui per te.",
                "Hai piani per oggi?",
                "Posso aiutarti con qualcosa?",
                "Mi racconti com'è andata la tua giornata?",
                "Sei fantastico!",
                "Sono contento di sentirti!",
                "Abbiamo qualcosa di speciale oggi?",
                "Ricordati di prenderti una pausa!",
                "Come va la tua settimana?",
                "Spero tu stia passando una buona giornata!",
                "Hai qualche novità interessante da condividere?",
                "Mi mancavi!",
                "Sono qui se hai bisogno di parlare.",
                "Che cosa hai fatto di bello ultimamente?",
                "Hai beccato la risposta bonus, eccoti un biscotto \uD83C\uDF6A",
            ];
            const randomIndex = Math.floor(Math.random() * responses.length);
            return responses[randomIndex];
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
                });

                const randomResponse = this.randomResponseGenerator();

                setTimeout(() => {
                    activeChat.messages.push({
                        date: `${currentDate} ${currentTime}`,
                        message: randomResponse,
                        status: 'recived',
                    });
                }, 1000);
                this.newMessage = '';
            }
        },

    },  
    computed: {
        filteredContacts() {
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchChat.toLowerCase()));
        },
    },

}).mount('#app');
