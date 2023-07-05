import {type SchemaTypeDefinition} from 'sanity';
import pageInfo from './schemas/pageInfo';
import experience from "./schemas/experience";
import skill from "./schemas/skill";
import social from "./schemas/social";
import project from "./schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, skill, social, project],
};
