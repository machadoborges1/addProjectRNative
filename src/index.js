import React, {useEffect, useState} from 'react';
import {SafeAreaView, Flatlist, Text, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native'; //ScrolView (para dar scrol)

import api from "./services/api";

// não possuem valor semantico (nenhum elemento tem significado)
// não possuem estilização propria
// todos componentes possuem por padrão display-flex
// não possui herança de estilo, por exemplo eu aplicar a cum container e esperar que passe para os filhos

// Viem: div, footer, header, main, aside, section (container em geral)
// text: p, span, strong, hi, h2, h3


export default function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject(){
    const response = await api.post('procejts', {
      title: `New Project ${Date.now()}`,
      owner: `New User`
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return ( //statusBar
    <>
      <StatusBar barStyle='light-content' backgroundColor="#666666"></StatusBar>

      <SafeAreaView style={styles.container}>
        <Flatlist
          //style={styles.container}
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}> {project.title}</Text>
          )}
        />
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>App Project</Text>
        </TouchableOpacity>
      </SafeAreaView>
      

      {/*<View style={styles.container}>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
        </View>*/}
    </>
  );
}

const styles = StyleSheet.create({ 
  container: {//Crtl " espaço ", vejo as estilizaçoes do CSS
    flex: 1, 
    backgroundColor: "#7159c1",
    //justifyContent: 'center',
    //alignItems: "center",
  },

  project: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});


