import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from './ui/card';

const formSchema = z.object({
	purpose: z.string().optional(),
	category: z.string().optional(),
	overnight: z.string().optional(),
	backgroundColor: z.string().optional(),
	belongings: z.string().optional(),
});

export function PromptForm(props: any) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			purpose: '',
			category: '',
			overnight: '',
			backgroundColor: props.color,
			belongings: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		props.changePrompt(values);
	}
	return (
		<Card className="w-[500px] p-6">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="purpose"
						render={({ field }) => (
							<FormItem>
								<FormLabel>旅の目的は？</FormLabel>
								<FormControl>
									<Input placeholder="例) グルメ、レジャー、癒し、冒険..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>どんな場所？</FormLabel>
								<FormControl>
									<Input placeholder="例) 温泉地、リゾート..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="overnight"
						render={({ field }) => (
							<FormItem>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="日帰り or 泊まり" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="False">日帰り</SelectItem>
										<SelectItem value="True">泊まり</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="backgroundColor"
						render={({ field }) => (
							<FormItem>
								<FormLabel>イメージカラー</FormLabel>
								<FormControl>
									<Input type="color" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="belongings"
						render={({ field }) => (
							<FormItem>
								<FormLabel>なにを持っていく？</FormLabel>
								<FormControl>
									<Input placeholder="例) パスポート、スマホ、充電器..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="text-white bg-sky-700 w-full">
						生成する
					</Button>
				</form>
			</Form>
		</Card>
	);
}

export default PromptForm;
