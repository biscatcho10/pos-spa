class Notification {

    constructor(message, type) {
        this.message = message;
        this.type = type
    }


    notify(type = this.type, message = this.message) {
        new Noty({
            type: type,
            layout: "topRight",
            text: message,
            timeout: 2000
        }).show();
    }

}

export default Notification = new Notification;
