import { library, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons/faCheckSquare';
import { faPrint } from '@fortawesome/free-solid-svg-icons/faPrint';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons/faPlusSquare';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';

export const Icons = () => {
  library.add(faCheck, faExclamation, faSquare, faSync, faEdit, faCheckSquare, faPrint, faPlusSquare, faTrashAlt);
};

const CheckSolidIcon: IconLookup = {
  prefix: 'fas',
  iconName: 'check',
};

const ExclamationSolidIcon: IconLookup = {
  prefix: 'fas',
  iconName: 'exclamation',
};

const SquareRegularIcon: IconLookup = {
  prefix: 'far',
  iconName: 'square',
};

const SyncSolidIcon: IconLookup = {
  prefix: 'fas',
  iconName: 'sync',
};

const EditSolidIcon: IconLookup = {
  prefix: 'fas',
  iconName: 'edit',
};

const CheckSquareRegularIcon: IconLookup = {
  prefix: 'far',
  iconName: 'check-square',
};

const PrintSolidIcon: IconLookup = {
  prefix: 'fas',
  iconName: 'print',
};

const PlusSquareRegularIcon: IconLookup = {
  prefix: 'far',
  iconName: 'plus-square',
};

const TrashAltRegularIcon: IconLookup = {
  prefix: 'far',
  iconName: 'trash-alt',
};

export {
  CheckSolidIcon,
  ExclamationSolidIcon,
  SquareRegularIcon,
  SyncSolidIcon,
  EditSolidIcon,
  CheckSquareRegularIcon,
  PrintSolidIcon,
  PlusSquareRegularIcon,
  TrashAltRegularIcon,
};
