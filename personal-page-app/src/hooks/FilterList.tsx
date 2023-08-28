import techList from '../data/exps.json';
import experience from '../types/ExpType';

const FilterList = () => {
  const list = techList;

  const fullStack = list.filter((tech: experience) => tech.stack.includes('front') && tech.stack.includes('back'));

  const frontList = list
    .filter((tech: experience) => tech.stack.includes('front') && !(tech.stack.includes('back')));

  const backList = list
    .filter((tech: experience) => tech.stack.includes('back') && !(tech.stack.includes('front')));

  const allLists = {
    fullList: list,
    frontList: fullStack.concat(frontList),
    backList: fullStack.concat(backList),
    onlyFront: frontList,
    onlyBack: backList,
  }

  return allLists;
}

export default FilterList;
