
import React from "react";
import ContactListItem from "./ContactListItem";
import { View, ScrollView } from "react-native";

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [] };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20")
            .then(response => response.json())
            .then(data => {
                this.setState({ contacts: data.results });
            });
    }

    renderItems() {
        return this.state.contacts.map(({ name, picture }, index) => (
            // Pass position to set LTR or RTL alignment of data
            <ContactListItem key={name}
                name={`${name.title} ${name.first} ${name.last}`}
                profileImage={picture.thumbnail}
                position={(index % 2 == 0) ? 'left' : 'right'}
            />
        ));
    }

    render() {
        return <ScrollView>{this.renderItems()}</ScrollView>;
    }
}

