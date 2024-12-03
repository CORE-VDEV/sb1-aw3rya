import { Prison } from '../../types/prison';
import { badenWuerttemberg } from './baden-wuerttemberg';
import { bayern } from './bayern';
import { berlin } from './berlin';
import { brandenburg } from './brandenburg';
import { bremen } from './bremen';
import { hamburg } from './hamburg';
import { hessen } from './hessen';
import { mecklenburgVorpommern } from './mecklenburg-vorpommern';
import { niedersachsen } from './niedersachsen';
import { nordrheinWestfalen } from './nordrhein-westfalen';
import { rheinlandPfalz } from './rheinland-pfalz';
import { saarland } from './saarland';
import { sachsen } from './sachsen';
import { sachsenAnhalt } from './sachsen-anhalt';
import { schleswigHolstein } from './schleswig-holstein';
import { thueringen } from './thueringen';

export const prisons: Prison[] = [
  ...badenWuerttemberg,
  ...bayern,
  ...berlin,
  ...brandenburg,
  ...bremen,
  ...hamburg,
  ...hessen,
  ...mecklenburgVorpommern,
  ...niedersachsen,
  ...nordrheinWestfalen,
  ...rheinlandPfalz,
  ...saarland,
  ...sachsen,
  ...sachsenAnhalt,
  ...schleswigHolstein,
  ...thueringen
];