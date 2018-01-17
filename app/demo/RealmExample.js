// RealmExample.js
// 测试 realm

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Realm from 'realm';

const CarSchema = {
  name: 'Car',
  properties: {
    make:  'string',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};
const PersonSchema = {
  name: 'Person',
  properties: {
    name:     'string',
    birthday: 'date',
    cars:     'Car[]',
    picture:  'data?' // optional property
  }
};

const realm = new Realm({schema: [CarSchema, PersonSchema]});


export default class RealmExample extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Realm.open({schema: [CarSchema, PersonSchema]})
      .then(realm => {
        // Create Realm objects and write to local storage
        realm.write(() => {
          const myCar = realm.create('Car', {
            make: 'Honda',
            model: 'Civic',
            miles: 1000,
          });
          myCar.miles += 20; // Update a property value
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <View>
        <Text>
          {realm.objects('Car').length}
        </Text>
      </View>
    );
  }
}