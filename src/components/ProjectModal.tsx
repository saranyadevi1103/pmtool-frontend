import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { addProject } from '../services/api';
import toast from 'react-hot-toast';

export default function ProjectModal({ open, setOpen, refresh }: { open: boolean; setOpen: (b: boolean) => void; refresh: () => void; }) {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    await addProject({ name });
    toast.success('Project created');
    setName('');
    setOpen(false);
    refresh();
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-sm rounded-2xl bg-white p-6 text-center">
                <Dialog.Title className="text-xl font-bold text-[#845EC2]">New Project</Dialog.Title>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="mt-4 w-full border rounded-lg p-2"
                  placeholder="Project name"
                />
                <button onClick={handleAdd} className="mt-4 w-full bg-[#845EC2] text-white py-2 rounded-lg">Create</button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
