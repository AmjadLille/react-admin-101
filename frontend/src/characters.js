import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const CharacterCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);