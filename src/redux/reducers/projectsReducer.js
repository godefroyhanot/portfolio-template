const loadProjectsFromLocalStorage = () => {
  const savedProjects = localStorage.getItem("projects");
  return savedProjects ? JSON.parse(savedProjects) : [];
};

const initialState = {
  projects: loadProjectsFromLocalStorage(),
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      const newStateAfterAdd = {
        ...state,
        projects: [...state.projects, action.payload],
      };
      localStorage.setItem(
        "projects",
        JSON.stringify(newStateAfterAdd.projects)
      );
      return newStateAfterAdd;

    case "REMOVE_PROJECT":
      const newStateAfterRemove = {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
      localStorage.setItem(
        "projects",
        JSON.stringify(newStateAfterRemove.projects)
      );
      return newStateAfterRemove;

    case "UPDATE_PROJECT":
      const updatedProjects = state.projects.map((project) =>
        project.id === action.payload.id
          ? { ...project, ...action.payload }
          : project
      );
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      return { ...state, projects: updatedProjects };

    default:
      return state;
  }
};

export default projectsReducer;
