
import { Head, useForm } from '@inertiajs/react';
import BreadcumComponent from '@/Components/Dashboard/BreadcumComponent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from '@/Components/Form/InputLabel';
import Input from '@/Components/Form/Input';
import SubmitButton from '@/Components/Form/SubmitButton';
import ImageFile from '@/Components/Form/ImageFile';


export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        thumbnail: null,
        status: 1,
    });

    function submit(e) {
        e.preventDefault()
        post(route('category.store'));
    }

    return (
        <AuthenticatedLayout>
            <BreadcumComponent pageOne="Categories" pageOneRoute="category.index" />

            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-neutral-700">
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        Category Create
                    </p>
                </div>
                <div className="p-4 md:p-5">
                    <div className=" px-2 py-2 sm:px-6 lg:px-4 mx-auto">
                        <form onSubmit={submit}>
                            <div>
                                <InputLabel isRequired={true} labelFor="name" />
                                <Input id="name" type="text" name="name" value={data.name} autoComplete="name" placeholder="name" onChange={(e) => setData('name', e.target.value)} />
                                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
                            </div>
                            <div>
                                <InputLabel isRequired={true} labelFor="Description" />
                                <textarea id="description" rows={5} type="file" name="description" placeholder="Write about Category." onChange={(e) => setData('description', e.target.value)}
                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">{data.description}</textarea>
                                <p className="text-sm text-red-600 mt-2">{errors.description}</p>
                            </div>

                            {/* <div>
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <input id="thumbnail" type="file" name="thumbnail"  placeholder="thumbnail" onChange={(e) => setData('thumbnail', e.target.files[0])} />
                                <p className="text-sm text-red-600 mt-2">{errors.thumbnail}</p>
                            </div> */}

                            <div>
                                <InputLabel isRequired={true} labelFor="thumbnail" />
                                <ImageFile name="thumbnail" setData={setData} errors={errors} placeholder="Feature Photo" />
                            </div>


                            <div>
                                <InputLabel isRequired={true} labelFor="status" />
                                <select id="status" name="status" className="py-2 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                    onChange={(e) => setData('status', e.target.value)}>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                                <p className="text-sm text-red-600 mt-2">{errors.status}</p>
                            </div>


                            <SubmitButton />
                        </form>
                    </div>
                </div>
            </div>





        </AuthenticatedLayout>
    );
}
